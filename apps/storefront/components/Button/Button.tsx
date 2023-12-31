import clsx from "clsx";
import { HTMLAttributes } from "react";

const styles =
  "bg-yellow-100 border border-yellow-300 rounded-md shadow-sm py-2 px-4 text-base font-medium hover:bg-yellow-200";

export type ButtonProps = Pick<HTMLAttributes<{}>, "className" | "onClick" | "children">;

export function Button({ className, ...rest }: ButtonProps) {
  return <button type="button" className={clsx(styles, className)} {...rest} />;
}
