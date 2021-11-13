import { NumbersCollection } from './NumbersCollection';

// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightindex: number): void;
// }

// note this syntax - we never wanna create Sorter(linkedList)
// we can
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

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
