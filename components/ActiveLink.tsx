import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline"
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = (props) => {
  const { text, href } = props;

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined}>{text}</span>
    </Link>
  );
};
