type Props = {
  value: string;
  path: string;
};

export default function NavigationItem({ value, path }: Props) {
  return (
    <>
      <li role="listitem" className="navigation-item">
        <a href={path} rel="noreferrer" target="_blank">
          {value}
        </a>
      </li>
    </>
  );
}
