import db from "~/lib/db.server";

import { User } from "@prisma/client";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

export const action: ActionFunction = async (args) => {
  const formData = await args.request.formData();
  const userData = Object.fromEntries(formData.entries());
  await db.user.create({
    data: {
      name: userData.name as any,
      age: "age" in userData ? parseInt(userData.age as any) : undefined,
    },
  });
  return redirect("/user");
};

export default function Index() {
  return (
    <div>
      <div className={"bg-gray-100 p-5"}>
        <Form method="post">
          <input name="name" />
          <button type="submit">Create User</button>
        </Form>
      </div>
    </div>
  );
}
