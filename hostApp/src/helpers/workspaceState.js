export const setworkspaceState  = (workspaceId, state) => {
    const workspaces = JSON.parse(sessionStorage.getItem('workspaces')) || [];
    const workspaceIndex = workspaces.findIndex(workspace => workspace.id === workspaceId);
    if (workspaceIndex === -1) {
        return;
    }
    workspaces[workspaceIndex].state = state;
    sessionStorage.setItem("workspaces", JSON.stringify(workspaces));
}

export const getworkspaceState = (workspaceId) => {
    const workspaces = JSON.parse(sessionStorage.getItem("workspaces")) || [];
    const workspace = workspaces.find(workspace => workspace.id === workspaceId);
    return workspace?.state;
}