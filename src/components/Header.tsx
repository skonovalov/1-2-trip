type headerTypes = {
  isMobile: boolean
};

export default function Header({ isMobile = false }: headerTypes) {
  const classNames = isMobile ? 'header header--mobile' : 'header';

  return (
    <header className={classNames}>
      header
    </header>
  );
}
