import { useEffect } from "react";

interface UseWebViewProps {
  onMessage: (data: { type: string; data: unknown }) => void;
}

type WebViewMessageEvent = MessageEvent | (Event & { data?: unknown });

const postMessage = (data: unknown) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
};

/**
 * React Native WebView와 통신하는 훅
 *
 * @param onMessage - WebView에서 메시지를 받았을 때 호출되는 콜백
 * @returns postMessage - WebView로 메시지를 보내는 함수
 *
 * @example
 * ```tsx
 * const { postMessage } = useWebView({
 *   onMessage: (event) => {
 *     console.log('받은 메시지:', event.type, event.data);
 *   }
 * });
 *
 * // 메시지 보내기
 * postMessage({ type: 'USER_ACTION', data: { action: 'click' } });
 * ```
 */
export const useWebView = ({ onMessage }: UseWebViewProps) => {
  useEffect(() => {
    const onWebViewMessage = (e: WebViewMessageEvent) => {
      onMessage(JSON.parse(e.data));
    };

    // iOS
    window.addEventListener("message", onWebViewMessage);

    // Android
    document.addEventListener("message", onWebViewMessage);

    // RN에게 "웹 준비됨" 신호 전송
    try {
      postMessage({ type: "WEB_READY" });
    } catch (error) {
      console.error(error);
    }

    return () => {
      window.removeEventListener("message", onWebViewMessage);
      document.removeEventListener("message", onWebViewMessage);
    };
  }, []);

  return { postMessage };
};
