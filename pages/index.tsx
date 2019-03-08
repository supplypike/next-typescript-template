import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <div className="link">
        <Link href="/miranda">
          <a>Miranda</a>
        </Link>
      </div>
      <div>
        <Link href="/tower">
          <a>Control Tower</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
