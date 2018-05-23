function qSort(compare) {
    var swap = (p1, p2) => {
        var tmp = this[p1];
        this[p1] = this[p2];
        this[p2] = tmp; 
    }
    var sortRange = (start, end) => {
        var midValue = this[start];
        var p1 = start + 1, p2 = end - 1;
        while(p1 < p2) {
            while(compare(this[p1], midValue) <= 0 && p1 < p2) {
                swap(p1, p2--);
            }
            p1 ++;
        }
        var mid = this[p2] <= midValue ? p2 : p2 -1;
        swap(start, mid);
        if(start < mid - 1) 
            sortRange(start, mid);
        if(mid + 1 < end ) 
            sortRange(mid + 1, end);
        
    }
    sortRange(0, this.length);
    return this;
};

qSort.call([6, 1, 2, 7, 9, 3, 4, 5, 10, 8], (a, b) => b - a);




var y = g => 
    (f=>f(f))(
        self => 
            g( (...args)=>self(self).apply(this,args) ) 
    )

var qSort = y(qSort => 
    (array, compare) =>
        array.length <= 1 ? 
            array :
            qSort(array.slice(1).filter(e => compare(e, array[0]) > 0), compare)
                .concat([array[0]])
                .concat(qSort(array.slice(1).filter(e => compare(e, array[0]) <= 0),compare)))
qSort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8], (a, b) => b - a);