## Backend

# npm init -y
# npm install express
# npm install typescript ts-node-dev @types/express -D
# tsc --init
# npm install typeorm reflect-metadata pg

#  "scripts": {
#    "dev": "ts-node-dev --transpile-only src/server.ts",
#    "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
#  },

# Criar migration

# npm run typeorm migration:create -- -n CreateNameMigration

# Executar a migration

# npm run typeorm migration:run

# Desfazer a última migration criada

# npm run typeorm migration:revert

# npm install uuid

# npm install @types/uuid -D