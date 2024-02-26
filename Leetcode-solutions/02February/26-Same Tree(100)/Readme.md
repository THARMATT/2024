# 100. Same Tree

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
```js
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }
 ```

# Explanation
Suppose we have two binary trees `p` and `q`:

```m
Tree p:            Tree q:
    1                  1
   / \                / \
  2   3              2   3
```

Now, let's compare these two trees using the `isSameTree` function.

1. We start by comparing the root nodes of `p` and `q`, which both have the value `1`. Since they match, we proceed to compare their left and right subtrees.
2. For the left subtrees:
   - Tree `p`'s left subtree has a node with the value `2`.
   - Tree `q`'s left subtree also has a node with the value `2`.
   - We call `isSameTree(p.left, q.left)` to compare these left subtrees.
3. For the right subtrees:
   - Tree `p`'s right subtree has a node with the value `3`.
   - Tree `q`'s right subtree also has a node with the value `3`.
   - We call `isSameTree(p.right, q.right)` to compare these right subtrees.
4. Now, let's zoom in on the left subtrees:
   - Both `p.left` and `q.left` are `null`, indicating they have no further nodes.
   - Since both left subtrees are `null`, they match.
5. Now, let's zoom in on the right subtrees:
   - Both `p.right` and `q.right` are `null`, indicating they have no further nodes.
   - Since both right subtrees are `null`, they match.
6. With both the left and right subtrees matching, the function returns `true`, indicating that trees `p` and `q` are identical.

So, the result of `isSameTree(p, q)` for these trees would be `true`.

```js
function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```