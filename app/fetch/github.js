import fetch from "isomorphic-fetch";

export async function getMembers() {
  console.log(`typeof fetch`, fetch);
  return fetch(`https://api.github.com/users/Berenika14`, {
    method: "GET",
  });
}
// export async function getMembers() {
//   let res = await fetch(
//     `https://api.github.com/repos/Berenika14/Berenika14#readme`,
//     {
//       method: "GET",
//     }
//   );
//   return res;
// }
