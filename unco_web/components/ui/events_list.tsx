import { cities } from '@/components/ui/cities';

export const EventsList = () => {
  return (
    <div className="md:hidden w-full px-[10%] mt-10 mb-5">
      <h1 className="text-base mb-4">EVENTS</h1>
      <div className="flex flex-col divide-y divide-gray-200">
        {cities
          .filter((city) => city.events && city.events.length > 0) // Only include cities with events
          .map((city) =>
            city.events.map((event, index) => (
              <div
                key={`${city.name}-${event.eventName}-${index}`}
                className="grid grid-cols-[1fr_3fr_auto] gap-4 py-3 items-center"
              >
                {/* City Name */}
                <div className="font-medium text-xs">{city.name}</div>

                {/* Event Name */}
                <div className="text-xs text-gray-700">{event.eventName}</div>

                {/* Event Year */}
                <div className="text-xs text-gray-400 text-right">{event.year}</div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};
