// CODE here for your Lambda Classes

class person {
    constructor (attributes){
        this.newName = attributes.name;
        this.newAge = attributes.age;
        this.newLocation = attributes.location;
        this.newGender = attributes.gender;  
    }
    
speak() {
    return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
}

}

class instructor extends person {
    constructor(instructorAttributes) {
        super(instructorAttributes)
        this.newSpecialty = instructorAttributes.specialty;
        this.newFavLanguage = instructorAttributes.favLanguage;
        this.newCatchphrase = instructorAttributes.catchphrase;
        this.newSubject = instructorAttributes.subject;
        this.newStudent = instructorAttributes.student;
    }


subject() {
    return `Today we are learning about ${this.newSubject}`;
}

grade() {
    return `${this.newStudent} receives a perfect score on ${this.newSubject}`;
}
}

class student extends person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.newPreviousBackground = studentAttributes.previousBackground;
        this.newClassName = studentAttributes.className;
        this.newFavSubjects = studentAttributes.favSubjects;
        this.newSubject = studentAttributes.subject;
    }

listSubject() {
    return `${this.newName} favorite subject is ${this.newFavSubjects}`;
}

PRAssignment() {
    return `${this.newName} has submitted a PR for ${this.newSubject}`;
}

sprintChallenge() {
    return `${this.newName} has begun sprint challenge on ${this.newSubject}`;
}
}

class ProjectManager extends instructor {
    constructor(ProjectManagerAttributes) {
        super(ProjectManagerAttributes)
        this.newGradClassName = ProjectManagerAttributes.gradClassName;
        this.newFavInstructor = ProjectManagerAttributes.favInstructor;
        this.newChannel = ProjectManagerAttributes.channel;
    }

standup() {
    return `${this.newName} announces to ${this.newChannel}, @channel study times!`;
}

debugsCode() {
    return `${this.newName} debugs ${this.newStudent} code on ${this.newSubject}`;
}
}

const kevin = new person ({
    name: "kevin",
    age: "35",
    location: "baltimore",
    gender: "male",
})

const keiran = new instructor ({
    name: "keiran",
    specialty: "javascript",
    favLanguage: "javascript",
    catchphrase: "hot dog, hot dog",
    subject: "javascript",
    student: "randy",
}) 

const randy = new student ({
    name: "randy",
    previousBackground: "maintenance work",
    className: "webpt6",
    favSubjects: "html, javascript",
    subject: "javascriptIV",
})

const richard = new ProjectManager ({
    name: "richard",
    gradClassName: "webpt6",
    favInstructor: "keiran", 
    channel: "webpt6_richard",
})

console.log(kevin.speak());
console.log(keiran.subject());
console.log(keiran.grade());
console.log(randy.listSubject());
console.log(randy.PRAssignment());
console.log(randy.sprintChallenge());
console.log(richard.standup());
console.log(richard.debugsCode());
