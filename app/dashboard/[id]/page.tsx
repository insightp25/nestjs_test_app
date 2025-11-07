export default async function DashboardDefaultPage({
    params, 
    searchParams
}: {
        params: Promise<{ id: string}>;
        searchParams: Promise<{ [bitch: string]: string | string[] | undefined }>
    }
) {
    let { id } = await params;
    let sp = await searchParams;

    console.log(sp)

    return <main>
        Dashboard Detail Page: id={ id ?? "whaaat"}, 
        code={ sp["code"] ?? "" }, 
        etc={ sp["etc"] ?? ""}
        </main>;
}