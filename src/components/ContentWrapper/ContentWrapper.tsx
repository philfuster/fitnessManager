import './styles.css';

function ContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="content-wrapper">{children}</div>;
}

export default ContentWrapper;
