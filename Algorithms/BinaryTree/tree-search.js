/**
 * @description Arvore binária e busca
 * Ref.: https://www.youtube.com/watch?v=ewb1WUuTgRU
 */

const arvore = {};

function insert(tree, value) {
        if (tree.value) {
                if (value > tree.value) {
                        insert(tree.right, value);
                } else {
                        insert(tree.left, value);
                }
        } else {
                tree.value = value;
                tree.right = {};
                tree.left = {};
        }
}

insert(arvore, 10);
console.log(arvore);
insert(arvore, 11);
console.log(arvore);
insert(arvore, 9);
console.log(arvore);
insert(arvore, 8);
console.log(arvore);