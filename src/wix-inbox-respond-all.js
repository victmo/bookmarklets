((win) => {

  const $ = (selector, target) => [...(target || document).querySelectorAll(selector)];

  const selector = {
    convos: '[data-hook="chatroom-list-entry"]',
    quickActions: '[data-hook="quick-actions"] > div > div',
    replyBox: 'textarea[data-hook="input"]',
    send: '[data-hook="send-button"]',
    currEmail: '[data-hook="input-send-indication-label"]'
  };

  /**
   * Sends an event to trick React into updating
   **/
  const doEvt = (el, ev) => el.dispatchEvent(new Event(ev, {bubbles: true}));

  /**
   * Sets the value of a textbox and trigger an event to update React
   **/
  const setValue = (input, value) => {
    input.value = value;
    doEvt(input, 'input');
  };

  const WixInbox = {};

  WixInbox.message = `Hello`;

  /**
   * Archives a conversation
   **/
  WixInbox.archiveConvo = (convo) => new Promise((resolve) => {
    $(selector.quickActions, convo)[0].click();
    setTimeout(resolve, 500);
  });

  /**
   * Loads a conversation messages and get a handle of the reply
   * textbox
   **/
  WixInbox.getConvoReplyBox = (convo) => new Promise((resolve) => {
    const isSelected = getComputedStyle(convo).cursor === 'auto';
    const getBox = (prev, cb) => {
      const curr = $(selector.currEmail)[0].innerText;
      if (prev === curr) setTimeout(() => getBox(curr, cb), 50);
      else cb($(selector.replyBox)[0]);
    }
    getBox(!isSelected && $(selector.currEmail)[0].innerText, resolve);
    !isSelected && convo.click();
  });

  /**
   * Writes a message on the reply textbox, wait a few miliseconds,
   * and presses the "Send" button. Resolves the promise after 1s
   **/
  WixInbox.respondConvo = (convo) => new Promise((resolve) => {
    WixInbox.getConvoReplyBox(convo).then((replyBox) => {
      setValue(replyBox, WixInbox.message);
      setTimeout(() => doEvt($(selector.send)[0], 'mouseup'), 200);
      setTimeout(resolve, 1000);
    });
  });

  /**
   * Sends a message to all loaded conversations
   **/
  WixInbox.respondToAll = async function({archive = false}) {
    const convos = $(selector.convos);
    for(let i in convos) {
      await WixInbox.respondConvo(convos[i]);
      if (archive) await WixInbox.archiveConvo(convos[i]);
      console.log(`Response ${(~~i + 1)} of ${convos.length} sent`);
    }
  }

  win.WixInbox = WixInbox;

})(window);

WixInbox.message = `Yolo`;

WixInbox.respondToAll({archive: false});
