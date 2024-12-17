import { cities } from '@/components/ui/cities';

export const StoriesList = () => {
  return (
    <div className="md:hidden w-full px-[10%] mb-5">
      <h1 className="text-base mb-4">STORIES</h1>
      <div className="flex flex-col divide-y divide-gray-200">
        {cities
          .filter((city) => city.article && city.article.length > 0) // Only include cities with articles
          .map((city) =>
            city.article!.map((article, index) => (
              <div
                key={`${city.name}-${index}`}
                className="grid grid-cols-[1fr_3fr_auto] gap-2 py-3 items-center"
              >
                {/* City Name */}
                <div className="font-medium text-xs text-left">{city.name}</div>

                {/* Article Title and Link */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-700 text-left"
                >
                  {article.title}
                </a>

                {/* Arrow Icon */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-left"
                >
                  <span className="text-gray-400">&#8599;</span>
                </a>
                
              </div>
            ))
          )}
      </div>
    </div>
  );
};
