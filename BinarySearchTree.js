class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

//Time complexity is O(n)
function treeHeight(t) {
    if (!t) {
      return 0
    }
    else if(!t.left && !t.right) {
      return 1
    }
    else if (!t.left && t.right) {
      return (1 + treeHeight(t.right))
    }
    else if (t.left && !t.right) {
      return (1 + treeHeight(t.left))
    }
    else if (t.left && t.right) {
      let leftH = treeHeight(t.left)
      let rightH = treeHeight(t.right)
      return (1 + (leftH > rightH? leftH : rightH))
    }
  }

let BST_no = new BinarySearchTree()
BST_no.insert(3,3)
BST_no.insert(1,1)
BST_no.insert(4,4)
BST_no.insert(6,6)
BST_no.insert(9,9)
BST_no.insert(2,2)
BST_no.insert(5,5)
BST_no.insert(7,7)

console.log(BST_no)

let BST_letter = new BinarySearchTree()
BST_letter.insert('e','e')
BST_letter.insert('a','a')
BST_letter.insert('s','s')
BST_letter.insert('y','y')
BST_letter.insert('q','q')
BST_letter.insert('u','u')
BST_letter.insert('e','e')
BST_letter.insert('s','s')
BST_letter.insert('t','t')
BST_letter.insert('i','i')
BST_letter.insert('o','o')
BST_letter.insert('n','n')

console.log(BST_letter)

console.log(treeHeight(BST_no))
console.log(treeHeight(BST_letter))