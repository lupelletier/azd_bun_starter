import MainNavigation from "~/views/components/navigation/main";
import LoadingIndicator from "~/views/components/loading-indicator";

export default function GuestLayout(props: {children: any}): any {
    return (
        <html>
        <head>
            <title>Familinks</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>

            <link rel="icon" href="/violette.svg"/>
            <script src="https://kit.fontawesome.com/52a84c43db.js" crossorigin="anonymous"/>
            <meta
                name="description"
                content="Familinks App"
            />
            <meta
                name="keywords"
                content="Familinks, Family, Links, App"
            />


            <script src="https://unpkg.com/htmx.org@1.9.11"></script>
            <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/disable-element.js"></script>

            <meta name="htmx-config" content='{"defaultSwapStyle":"outerHTML"}'/>

            <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
            <link href="/assets/css/index.min.css" rel="stylesheet"/>
        </head>

        <body class="bg-light h-screen w-full">
        <LoadingIndicator />
        <div id="home-guest">
            {props.children}
        </div>
        </body>
        <script
            defer
            src="https://kit.fontawesome.com/f559975e2f.js"
            crossorigin="anonymous"
        />
        <script src="/assets/js/custom-javascript.min.js" defer></script>
        </html>
    );
}