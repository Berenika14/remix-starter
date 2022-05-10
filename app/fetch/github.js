import fetch from "isomorphic-fetch";
export async function getMembers() {
  let res = await fetch(`https://api.github.com/users/Berenika14`, {
    method: "GET",
  });
  return res;
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
