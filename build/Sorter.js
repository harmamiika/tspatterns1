"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// // Instead of this, interfaces are the ideal solution here
// class Sorter {
//     // union in ts allows access to class properties that both have in common
//     constructor(public collection: number[] | String) {}
//     sort(): void {
//       const { length } = this.collection;
//       for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i - 1; j++) {
//           // if number[]
//           // typescript spesific if-statement - typeguard
//           if (this.collection instanceof Array) {
//             if (this.collection[j] > this.collection[j + 1]) {
//               const leftHand = this.collection[j];
//               this.collection[j] = this.collection[j + 1];
//               this.collection[j + 1] = leftHand;
//             }
//           }
//           // if string
//           if (typeof this.collection === 'string') {
//           }
//         }
//       }
//     }
//   }
