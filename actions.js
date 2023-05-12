// actions.js

class Action {
    constructor(id, name, from, to) {
    this.id = id;
    this.name = name;
    this.from = from;
    this.to = to;
    }
    }
    
    const actions = [];
    
    // Add your actions here
    actions.push(new Action(1, 'Action 1', 'state1', 'state2'));
    actions.push(new Action(2, 'Action 2', 'state2', 'state3'));