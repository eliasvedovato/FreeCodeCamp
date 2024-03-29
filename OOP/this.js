let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {
    return "The name of this duck is " + duck.name + ".";
    },
    sayNameToo: function() {
        return "The name of this duck is " + this.name + "."
    }
}

/* While this is a valid way to access the object's 
property (sayName), there is a pitfall here. If the variable 
name changes, any code referencing the original name would 
need to be updated as well. In a short object definition, 
it isn't a problem, but if an object has many references 
to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword */