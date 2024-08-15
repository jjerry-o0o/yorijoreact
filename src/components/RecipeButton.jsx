export default function RecipeButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}