function isBST(t) {
    if (!t) {
      return true
    }
    else if(!t.left && !t.right) {
      return true
    }
    else if(t.left && !t.right){
      if (t.value < t.left.value) {
        return false
      }
      else {
        return isBST(t.left)
      }
    }
    else if(!t.left && t.right){
      if (t.value > t.right.value) {
        return false
      }
      else {
        return isBST(t.right)
      }
    }
    else if(t.left && t.right) {
      if ( t.value < t.left.value || t.value > t.right.value){
        return false
      }
      return (isBST(t.left) || isBSt(t.right))
    }
  }