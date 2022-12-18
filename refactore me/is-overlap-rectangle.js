function getRectangularCorners(l, r) {
    const [x1, y1] = l;
    const [x2, y2] = r;

    return [
        [x1, y1],
        [x1, y2],
        [x2, y2],
        [x2, y1],
    ];
}

function pointInRectangularArea(rectangle, point) {
    const [[lX, lY], [rX, rY]] = rectangle;
    const [x, y] = point;

    return lX <= x && x <= rX && rY <= y && y <= lY;
}


function isOverlap(l1, r1, l2, r2) {
    const corners = getRectangularCorners(l2, r2);

    return corners.some((point) => pointInRectangularArea([l1, r1], point));
}

{
    const l1 = [2, 3];
    const r1 = [4, -1];
    const l2 = [3, 5];
    const r2 = [6, 2];

    const result = isOverlap(l1, r1, l1, r1);

    console.log('expected: true , result:', result);
}

{
    const l1 = [2, 3];
    const r1 = [4, -1];
    const l2 = [30, 20];
    const r2 = [60, 10];

    const result = isOverlap(l1, r1, l2, r2);

    console.log('expected: false , result:', result);
}
