const navCode = `
        <ul>
            <li>
                <a href="/">
                    Random
                </a>
            </li>
            <li>
                <a href="/anime">
                    Anime
                </a>
            </li>
            <li>
                <a href="/memes">
                    Memes
                </a>
            </li>
            <li>
                <a href="/cats">
                    Cats
                </a>
            </li>
        </ul>
`
if ($('nav')) {
    $('nav').html(navCode)
}