// javascript:function%20Gradebook(classId)%20{self%20=%20this;self.classId%20=%20classId%20%7C%7C%20((/class=(.%2B?)%5C%26/).exec(document.querySelector(%27.student-list--students%20li%20a%27).href))[1];self.assignments%20=%20[];getAssignments(self.classId%2C%20()%20=%3E%20console.log(%27Assignments%20loaded!%27));function%20getAssignments(classId%2C%20cb)%20{const%20endpoint%20=%20%60/assignments/getAll?type=classes%26typeId=%24{%20classId%20}%60;console.info(%60Fetching%20%24{%20endpoint%20}%60);fetch(endpoint%2C%20{credentials%3A%20%27include%27}).then(res%20=%3E%20{return%20res.json();}).then(assignments%20=%3E%20{self.assignments%20=%20assignments.map(a%20=%3E%20{const%20assignment%20=%20{id%3A%20a.id%2CarticleId%3A%20a.classAssignmentInfo.message%2CarticleTitle%3A%20a.classAssignmentInfo.tasks[0].metadata.articleTitle%2ChasAlternateLexile%3A%20a.classAssignmentInfo.tasks[0].metadata.hasAlternateLexile%2Curl%3A%20a.classAssignmentInfo.tasks[0].uri};assignment.unassign%20=%20()%20=%3E%20{getAssignmentStudents(self.classId%2C%20assignment.articleId%2C%20(err%2C%20studentIds)%20=%3E%20{if(err)%20return%20console.error(%27Could%20not%20unassign%20(unable%20to%20get%20student%20ids)%27);unassignAssignment({articleId%3A%20assignment.articleId%2CassignmentId%3A%20assignment.id%2CarticleTitle%3A%20assignment.articleTitle%2CclassId%3A%20classId%2ChasAlternateLexile%3A%20assignment.hasAlternateLexile%2CstudentId%3A%20studentIds.join(%27%2C%27)%2CisComplete%3A%20studentIds.map(s%20=%3E%20%27%27).join(%27%2C%27)%2CalternateLexile%3A%20%27%27%2Cmodal%3A%20%271%27}%2C%20()%20=%3E%20{if(err)%20return%20console.error(err);return%20console.log(%60Unassigned%20%22%24{%20assignment.articleTitle%20}%22%60);});});};assignment.reassign%20=%20()%20=%3E%20{getAssignmentStudents(self.classId%2C%20assignment.articleId%2C%20(err%2C%20studentIds)%20=%3E%20{if(err)%20return%20console.error(%27Could%20not%20reassign%20(unable%20to%20get%20student%20ids)%27);assignAssignment({articleId%3A%20assignment.articleId%2CassignmentId%3A%20%27%27%2CarticleTitle%3A%20assignment.articleTitle%2CclassId%3A%20classId%2ChasAlternateLexile%3A%20assignment.hasAlternateLexile%2CstudentId%3A%20studentIds.join(%27%2C%27)%2CisComplete%3A%20studentIds.map(s%20=%3E%20%27%27).join(%27%2C%27)%2CalternateLexile%3A%20%27%27%2Cmodal%3A%20%271%27}%2C%20()%20=%3E%20{if(err)%20return%20console.error(err);return%20console.log(%60Reassigned%20%22%24{%20assignment.articleTitle%20}%22%60);});});};return%20assignment;});console.info(%60Loaded%20%24{%20self.assignments.length%20}%20assignment%24{%20self.assignments.length%20===%201%20?%20%27%27%20%3A%20%27s%27%20}%60);}).catch(err%20=%3E%20console.error);}function%20getAssignmentStudents(classId%2C%20articleId%2C%20cb)%20{const%20endpoint%20=%20%60/dashboard/assignment?modal=1%26class=%24{%20classId%20}%26article=%24{%20articleId%20}%60;console.info(%60Fetching%20%24{%20endpoint%20}%60);fetch(endpoint%2C%20{credentials%3A%20%27include%27}).then(res%20=%3E%20res.text()).then(text%20=%3E%20{const%20ids%20=%20[];text.replace(/%5C(([A-Z]{2}%5Cd{4})%5C)/g%2C%20(a%2C%20b)%20=%3E%20ids.push(b));return%20cb(null%2C%20ids)}).catch(err%20=%3E%20cb(err));}function%20assignAssignment(data%2C%20cb)%20{const%20endpoint%20=%20%27/assignments/class/add%27;const%20form%20=%20new%20URLSearchParams();Object.keys(data).forEach(key%20=%3E%20form.append(key%2C%20data[key]));console.info(%60Fetching%20%24{%20endpoint%20}%60);fetch(endpoint%2C%20{credentials%3A%20%27include%27%2Cmethod%3A%20%27POST%27%2Cbody%3A%20form}).then(res%20=%3E%20{if(!res.ok)%20cb(%27Could%20not%20assign%27);return%20cb(null%2C%20true)}).catch(err%20=%3E%20cb(err));}function%20unassignAssignment(data%2C%20cb)%20{const%20endpoint%20=%20%27/assignments/class/remove%27;const%20form%20=%20new%20URLSearchParams();Object.keys(data).forEach(key%20=%3E%20form.append(key%2C%20data[key]));console.info(%60Fetching%20%24{%20endpoint%20}%60);fetch(endpoint%2C%20{credentials%3A%20%27include%27%2Cmethod%3A%20%27POST%27%2Cbody%3A%20form}).then(res%20=%3E%20{if(!res.ok)%20cb(%27Could%20not%20unassign%27);return%20cb(null%2C%20true)}).catch(err%20=%3E%20cb(err));}self.unassignAll%20=%20()%20=%3E%20{self.assignments.forEach(a%20=%3E%20a.unassign());};self.reassignAll%20=%20()%20=%3E%20{self.assignments.forEach(a%20=%3E%20a.reassign());};return%20self;}var%20gb%20=%20new%20Gradebook();
function Gradebook(classId) {
	self = this;
	self.classId = classId || ((/class=(.+?)\&/).exec(document.querySelector('.student-list--students li a').href))[1];
	self.assignments = [];
	getAssignments(self.classId, () => console.log('Assignments loaded!'));

	function getAssignments(classId, cb) {
		const endpoint = `/assignments/getAll?type=classes&typeId=${ classId }`;
		console.info(`Fetching ${ endpoint }`);
		fetch(endpoint, {credentials: 'include'})
			.then(res => {
				return res.json();
			})
			.then(assignments => {
				self.assignments = assignments.map(a => {
					const assignment = {
						id: a.id,
						articleId: a.classAssignmentInfo.message,
						articleTitle: a.classAssignmentInfo.tasks[0].metadata.articleTitle,
						hasAlternateLexile: a.classAssignmentInfo.tasks[0].metadata.hasAlternateLexile,
						url: a.classAssignmentInfo.tasks[0].uri
					};

					assignment.unassign = () => {
						getAssignmentStudents(self.classId, assignment.articleId, (err, studentIds) => {
							if(err) return console.error('Could not unassign (unable to get student ids)');
							unassignAssignment({
								articleId: assignment.articleId,
								assignmentId: assignment.id,
								articleTitle: assignment.articleTitle,
								classId: classId,
								hasAlternateLexile: assignment.hasAlternateLexile,
								studentId: studentIds.join(','),
								isComplete: studentIds.map(s => '').join(','),
								alternateLexile: '',
								modal: '1'
							}, () => {
								if(err) return console.error(err);
								return console.log(`Unassigned "${ assignment.articleTitle }"`);
							});
						});
					};

					assignment.reassign = () => {
						getAssignmentStudents(self.classId, assignment.articleId, (err, studentIds) => {
							if(err) return console.error('Could not reassign (unable to get student ids)');
							assignAssignment({
								articleId: assignment.articleId,
								assignmentId: '',
								articleTitle: assignment.articleTitle,
								classId: classId,
								hasAlternateLexile: assignment.hasAlternateLexile,
								studentId: studentIds.join(','),
								isComplete: studentIds.map(s => '').join(','),
								alternateLexile: '',
								modal: '1'
							}, () => {
								if(err) return console.error(err);
								return console.log(`Reassigned "${ assignment.articleTitle }"`);
							});
						});
					};

					return assignment;
				});
				console.info(`Loaded ${ self.assignments.length } assignment${ self.assignments.length === 1 ? '' : 's' }`);
			})
			.catch(err => console.error)
		;
	}

	function getAssignmentStudents(classId, articleId, cb) {
		const endpoint = `/dashboard/assignment?modal=1&class=${ classId }&article=${ articleId }`;
		console.info(`Fetching ${ endpoint }`);
		fetch(endpoint, {credentials: 'include'})
			.then(res => res.text())
			.then(text => {
				const ids = [];
				text.replace(/\(([A-Z]{2}\d{4})\)/g, (a, b) => ids.push(b));
				return cb(null, ids)
			})
			.catch(err => cb(err))
		;
	}

	function assignAssignment(data, cb) {
		const endpoint = '/assignments/class/add';
		const form = new URLSearchParams();
		Object.keys(data).forEach(key => form.append(key, data[key]));
		console.info(`Fetching ${ endpoint }`);
		fetch(endpoint, {
			credentials: 'include',
			method: 'POST',
			body: form
		})
			.then(res => {
				if(!res.ok) cb('Could not assign');
				return cb(null, true)
			})
			.catch(err => cb(err))
		;
	}

	function unassignAssignment(data, cb) {
		const endpoint = '/assignments/class/remove';
		const form = new URLSearchParams();
		Object.keys(data).forEach(key => form.append(key, data[key]));
		console.info(`Fetching ${ endpoint }`);
		fetch(endpoint, {
			credentials: 'include',
			method: 'POST',
			body: form
		})
			.then(res => {
				if(!res.ok) cb('Could not unassign');
				return cb(null, true)
			})
			.catch(err => cb(err))
		;
	}

	self.unassignAll = () => {
		self.assignments.forEach(a => a.unassign());
	};

	self.reassignAll = () => {
		self.assignments.forEach(a => a.reassign());
	};

	return self;
}

var gb = new Gradebook();
