
export async function requestDeleteClient({ baseUrl, clientId }: { baseUrl: string, clientId: string }): Promise<void> {
    await fetch(baseUrl + "/clients" + `/${ clientId}`+"/delete", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });
}