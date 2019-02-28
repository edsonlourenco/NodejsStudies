/**
 * @description Arvore binária e navegaç;ao básica
 * Ref.: https://www.youtube.com/watch?v=_jBCy4VX4C4
 */

let arvore = {
     left: {
         left: undefined,
         right: {
             value: 3
         },
         value: 2
     },
     right: undefined,
     value: 10
}

/**
 *@description Algoritmo PreOrder
*/
function preOrder(tree) {
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}
console.log('preOrder');
preOrder(arvore);

function inOrder(tree) {
    tree.left && inOrder(tree.left);
    console.log(tree.value);
    tree.right && inOrder(tree.right);
}
console.log('inOrder');
inOrder(arvore);

function posOrder(tree) {
    tree.left && posOrder(tree.left);
    tree.right && posOrder(tree.right);
    console.log(tree.value);
}
console.log('posOrder');
posOrder(arvore);