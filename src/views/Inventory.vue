<script setup>
import data from '../data/collections.json'

function parseId(id) {
  const match = id.match(/^(\d+)([a-z])?$/i)
  return {
    number: parseInt(match[1], 10),
    suffix: match[2] || null
  }
}

function analyzeCollection(items) {
  const parsed = items.map(i => parseId(i.id))
  const existing = new Set(items.map(i => i.id))

  const numbers = parsed.map(p => p.number)
  const max = Math.max(...numbers)

  const result = []

  for (let n = 1; n <= max; n++) {
    const baseId = String(n)
    result.push({
      id: baseId,
      have: existing.has(baseId)
    })

    const variants = parsed
      .filter(p => p.number === n && p.suffix)
      .map(p => p.suffix)

    if (variants.length) {
      const maxSuffix = variants.sort().slice(-1)[0]
      for (
        let c = 'a'.charCodeAt(0);
        c <= maxSuffix.charCodeAt(0);
        c++
      ) {
        const vid = `${n}${String.fromCharCode(c)}`
        result.push({
          id: vid,
          have: existing.has(vid)
        })
      }
    }
  }

  return result
}
</script>

<template>
  <section class="inventory">
    <h1>Inventario</h1>

    <div
      v-for="collection in data.collections"
      :key="collection.number"
      class="inventory-collection"
    >
      <h2>
      {{ collection.number }} – {{ collection.title  }}
      </h2>

      <div class="inventory-grid">
        <div
          v-for="item in analyzeCollection(collection.items)"
          :key="item.id"
          class="inventory-item"
          :class="{ have: item.have, missing: !item.have }"
        >
          <router-link v-if="item.have" :to="`collection/${collection.number}/item/${item.id}`">
            {{ item.id }}
          </router-link>
          <span v-else>
            {{ item.id }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inventory {
  padding: 1rem;
}

.inventory-collection {
  margin-bottom: 2rem;
}

.inventory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 0.5rem;
}

.inventory-item {
  padding: 0.5rem;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
}

.inventory-item.have {
  background: #d1fae5;
  color: #065f46;
}

.inventory-item.missing {
  background: #fee2e2;
  color: #991b1b;
}
</style>
