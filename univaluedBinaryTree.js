/*
  A binary tree is univalued if every node in the tree has the same value.
  Return true if and only if the given tree is univalued.

  Definition for a binary tree node
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
*/

let isUnivalTree = function(root, val = root.val) {
  if (root.val !== val) {
    return false;
  }
  if (root.left !== null) {
    if (!isUnivalTree(root.left, val)) {
      return false;
    };
  }
  if(root.right !== null) {
    if (!isUnivalTree(root.right, val)) {
      return false;
    };
  }
  return true;
};
