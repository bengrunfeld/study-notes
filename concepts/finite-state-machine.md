# Finite State Machine

A Finite State Machine (FSM) is a computing machine that has a fixed set of possible states, as well as a fixed set of inputs, and a fixed set of outputs.

Finite states is another way of saying a "fixed set of possible states".

Whenever we implement a FSM, we only have a limited amount of memory to play with - hence it being finite.

FSM's do not need to have an output.

To clarify: a FSM is a conceptual machine (e.g. a software program) that can take some input. Whatever the input is, it either causes the machine to just remain in its current state, or to change the state observed.

E.g. a light switch, or an on-off slider.

A key feature of a finite state machine is that the state it changes to is based on both the current state AND the input value.

E.g. when you hit a "toggle" button that switches an on-screen color between black and white, it takes into account the current state (color), and then changes to the other one. 

Despite the fact that the input is the same, the output is different. 

Applying the same input many times doesn't necessarily lead to different results.

This means the machines entire history can be summarised in its current state. How it got to that state is irrelevant. You just have to look at the current state and the new input.





