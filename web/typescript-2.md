# TypeScript 2020

TypeScript is a superset of Javascript, which means that it extends Javascript

## Defining a return object value for a function

    const sendMessage = (message: String): {
        message: string;
        wasSent: boolean;
        timeSentAt: number;
    } {
        return {
            message,
            wasSent: true,
            timeSentAt: 041924701240818
        }
    }

## Type Inferance

TypeScript can figure out the type of the variables without you having to provide any info at all.
