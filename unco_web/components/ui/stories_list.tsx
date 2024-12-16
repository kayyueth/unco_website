import { cities } from '@/components/ui/cities';

export const StoriesList = () => {
  return (
    <div className="md:hidden w-full px-5 mb-5">
      <h1 className="text-lg mb-4">STORIES</h1>
      <div className="flex flex-col divide-y divide-gray-200">
        {cities.map((city) =>
          city.article.map((article, index) => (
            <div
              key={`${city.name}-${index}`}
              className="grid grid-cols-[1fr_3fr_auto] gap-2 py-3 items-center"
            >
              {/* City Name */}
              <div className="font-medium text-sm text-left">{city.name}</div>

              {/* Article Title and Link */}
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 text-left"
              >
                {article.title}
              </a>

              {/* Arrow Icon */}
              <span className="text-gray-400">&#8599;</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}