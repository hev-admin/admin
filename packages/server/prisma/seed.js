import { exit } from 'node:process'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Example: Create a default user
  try {
    const admin = await prisma.user.create({
      data: {
        email: 'admin@admin.com',
        name: 'admin',
      },
    })
    console.log(`Created user with id: ${admin.id}`)
  }
  catch (error) {
    console.error('Error seeding data:', error)
    exit(1) // Exit with error code
  }
}

main()
  .catch((e) => {
    console.error(e)
    exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log('Seeding finished.')
  })
