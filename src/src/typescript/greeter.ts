interface helloFunc {
    (name: string): void;
}

const hello: helloFunc = (name: string): void => {
    console.log("Hello " + name);
};

hello("tarou");
