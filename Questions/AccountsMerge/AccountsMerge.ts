export default function accountsMerge(accounts: string[][]): string[][] {
    const emailToName = new Map<string,string>();
    const graph = new Map<string, Set<string>>()
    const visited = new Set<string>();
    const mergedAccounts: string[][] = [];

    for (const account of accounts) {
        const [name, ...emails] = account
        for (const email of emails) {
            if (!graph.has(email)) {
                graph.set(email, new Set())
                emailToName.set(email,name)

                const firstEmail = emails[0]
                graph.get(email)?.add(firstEmail)
                graph.get(firstEmail)?.add(email)
            }
        }
    }

    for(const [email, name] of emailToName) {
        if(!visited.has(email)) {
            const emails = new Set<string>()
            dfs(email, emails)

            const sortedEmails = Array.from(emails).sort()
            mergedAccounts.push([name, ...sortedEmails])
        }
    }

    function dfs(email:string, emails: Set<string>): void {
        visited.add(email)
        emails.add(email)

        for(const nextEmail of graph.get(email)!) {
            if (!visited.has(nextEmail)) {
                dfs(nextEmail, emails)
            }
        }
    }

    return mergedAccounts
}