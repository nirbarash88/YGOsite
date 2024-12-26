import Link from "next/link";
import { Title } from "../title/title";

type Props = {
  title: string;
  children: React.ReactNode;
  className: string;
  withBackToHome?: boolean;
};

export const PageLayout = ({
  title,
  children,
  className,
  withBackToHome,
}: Props) => {
  return (
    <div className="overlay">
      <div className={className}>
        <Title value={title} />
        {children}
        {withBackToHome && <Link href="/">Home</Link>}
      </div>
    </div>
  );
};
