function Tweet({ date, message, name, username}) {
    return (
        <div className="Tweet">
            <span>{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    );
}