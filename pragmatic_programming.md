# Pragmatic Programming

## Maintenance Mode
Most people assume that maintenance begins when an application is released, that maintenance means fixing bugs and enhancing features. We think these people are wrong. Programmers are constantly in maintenance mode. Our understanding changes day by day. New require- ments arrive as we’re designing or coding. Perhaps the environment changes. Whatever the reason, maintenance is not a discrete activity, but a routine part of the entire development process.

## Duplication and Orthogonality

The Evils of Duplication and Orthogonality, are closely related. The first warns you not to duplicate knowledge throughout your systems, the second not to split any one piece of knowledge across multiple system components.

## Duplication

It’s easy to duplicate knowledge in the specifications, processes, and programs that we develop, and when we do so, we invite a maintenance nightmare.

We feel that the only way to develop software reliably, and to make our developments easier to understand and maintain, is to follow what we call the `DRY` principle:> EVERY PIECE OF KNOWLEDGE MUST HAVE A SINGLE, UNAMBIGUOUS, AUTHORITATIVE REPRESENTATION WITHIN A SYSTEM.`DRY` stands for – Don’t Repeat Yourself.
The alternative is to have the same thing expressed in two or more places. If you change one, you have to remember to change the others. It isn’t a question of whether you’ll remember: it’s a question of when you’ll forget.
