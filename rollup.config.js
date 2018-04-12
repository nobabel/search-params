import typescript from 'rollup-plugin-typescript2'

export default ['es', 'cjs'].map(format => ({
    input: 'modules/index.ts',
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: format === 'es' ? {
                compilerOptions: {
                    module: 'esnext',
                    target: 'esnext',
                },
            } : undefined,
        })
    ],
    output: {
        name: 'SearchParams',
        format,
        file: `dist/${format}/index.js`
    }
}))
