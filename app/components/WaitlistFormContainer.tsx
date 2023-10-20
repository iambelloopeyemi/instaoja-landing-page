import { ReactNode } from "react";

export default function WaitlistFormContainer({
  children,
}: {
  children: string | ReactNode;
}) {
  return <div className="flex justify-center">{children}</div>;
}
