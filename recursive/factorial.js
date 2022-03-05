function factorial(N){
    if(!N) {
        return 1;
    }

    return N * factorial(N - 1);
}

// console.log(factorial(6)) // 6! = 6*5*4*3*2*1 =  720

const node = {
    value: 5,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null,
        },
        right: null,
    },
    right: {
        value: 8,
        left: null,
        right: null,
    }
}

function travel(node) {
    if(node === null) return;

    const stack = [];
    stack.push(node.right);
    stack.push(node.left);
    console.log(node.value);

    while(stack.length) {
        const node1 = stack.pop();
        if(node1 === null) continue;

        console.log(node1.value);
        stack.push(node1.right);
        stack.push(node1.left);
    }
}

console.log(travel(node));