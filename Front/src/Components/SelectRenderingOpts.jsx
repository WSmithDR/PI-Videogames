

export const selectRenderingOpts = (name, data) => {
    return(
        <select name={name}>
            {data}
        </select>
    )
}