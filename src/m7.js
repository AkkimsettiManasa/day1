function F7() {
    const n = ["p", "s", "d", "m"];
    return (
        <div>
            <ul>
                {n.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
        </div>
    );
}

export default F7;
