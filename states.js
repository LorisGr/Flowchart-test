// states.js

class State {
    constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    }
    }
    
    const states = [];
    
    // Add your states here
    states.push(new State(1, 'State 1', 100, 100));
    states.push(new State(2, 'State 2', 300, 100));
    states.push(new State(3, 'State 3', 500, 100));