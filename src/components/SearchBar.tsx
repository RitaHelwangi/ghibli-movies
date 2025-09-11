import '../styles/SearchBar.css';

type SearchBarProps = {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
};

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
	return (
		<div className="search-bar">
		<input
		type="text"
		placeholder="Search by title..."
		value={searchTerm}
		onChange={e => setSearchTerm(e.target.value)}
		/>
		</div>
	);
}

export default SearchBar;
