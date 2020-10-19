function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

/* This function returns the sum of all the values inside the tree
We can use this tree as an example 3 1 4 6 9 2 5 7 assuming that each key has the 
same value 
it goes like so
(1 subtree + 3 + 4 subtree)
1 subtree will be (1 + 2 subtree{which in turn will be 2})
4 subtree will be (4 + 6 subtree)
6 subtree will be (5 subtree + 6 + 9 subtree)
5 subtree will be 5
9 subtree will be (7 subtree {which is 7} + 9)
the result will be 37
and it has a O(n)
 */