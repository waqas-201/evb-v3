
import { motion } from "framer-motion";
import { X, Calendar, MapPin, Users, Clock } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleModel } from "../../featuers/casestudy/caseStudySlice";
import { removeEvent } from "../../featuers/casestudy/eventsDataSlice";

interface EventDetails {
  date: string;
  location: string;
  attendees: number;
  duration: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

interface FeaturedEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  details: EventDetails;
}



interface CaseStudyModalProps {
  event: FeaturedEvent;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ event }) => {
  const dispatch = useDispatch()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"

    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button

          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
          onClick={() => { dispatch(toggleModel()); dispatch(removeEvent()) }}
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold mb-2">
              {event.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </div>

          {/* Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4">
              <Calendar className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-400">
                  Date
                </h3>
                <p>{event.details.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-400">
                  Location
                </h3>
                <p>{event.details.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-400">
                  Attendees
                </h3>
                <p>{event.details.attendees.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-500 dark:text-gray-400">
                  Duration
                </h3>
                <p>{event.details.duration}</p>
              </div>
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Challenges</h3>
              <ul className="space-y-3">
                {event.details.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-500">•</span>
                    <p>{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Our Solutions
              </h3>
              <ul className="space-y-3">
                {event.details.solutions.map((solution, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-500">•</span>
                    <p>{solution}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Results</h3>
              <ul className="space-y-3">
                {event.details.results.map((result, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-500">•</span>
                    <p>{result}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


